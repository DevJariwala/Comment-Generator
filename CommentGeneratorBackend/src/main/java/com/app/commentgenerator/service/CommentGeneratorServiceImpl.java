package com.app.commentgenerator.service;

import com.app.commentgenerator.DTO.ResponseDTO;
import org.springframework.ai.chat.ChatClient;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.chat.prompt.PromptTemplate;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class CommentGeneratorServiceImpl implements CommentGeneratorService{

    private final ChatClient chatClient;
    private final String template = """
                you are a helpful Linked in Content Creator.
                You have a post: {post}
                here you have to create a linked in {comment_type} comment based on the post.          
                remember that comment should not be long paragraph. it should be short and crisp and should be in single line.
                """;
    public CommentGeneratorServiceImpl(ChatClient chatClient) {
        this.chatClient = chatClient;
    }

    @Override
    public ResponseDTO generateComment(String content, String commentType) {
        PromptTemplate promptTemplate = new PromptTemplate(template);
        Map<String,Object> map = new HashMap<>();
        map.put("post",content);
        map.put("comment_type",commentType);
        Prompt prompt = promptTemplate.create(map);
        String comment = chatClient.call(prompt).getResult().getOutput().getContent();
        return ResponseDTO.builder().comment(comment).build();
    }
}

