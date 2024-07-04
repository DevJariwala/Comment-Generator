package com.app.commentgenerator.controller;

import com.app.commentgenerator.DTO.GenerateCommentDTO;
import com.app.commentgenerator.DTO.ResponseDTO;
import com.app.commentgenerator.service.CommentGeneratorService;
import org.springframework.ai.chat.ChatClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin("https://www.linkedin.com")
public class CommentGeneratorController {

    private final ChatClient chatClient;

    public CommentGeneratorController(ChatClient chatClient) {
        this.chatClient = chatClient;
    }

    @Autowired
    private CommentGeneratorService commentGeneratorService;

    @PostMapping("/generateComment")
    public ResponseDTO generateComment(@RequestBody GenerateCommentDTO generateCommentDTO) {

        return commentGeneratorService.generateComment(generateCommentDTO.getContent(), generateCommentDTO.getCommentType());
    }
}

