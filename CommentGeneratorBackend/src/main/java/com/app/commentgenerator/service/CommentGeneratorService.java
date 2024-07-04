package com.app.commentgenerator.service;

import com.app.commentgenerator.DTO.ResponseDTO;

public interface CommentGeneratorService {
    ResponseDTO generateComment(String content, String commentType);
}
