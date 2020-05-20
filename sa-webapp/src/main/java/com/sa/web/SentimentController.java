package com.sa.web;

import com.sa.web.dto.SentenceDto;
import com.sa.web.dto.SentimentDto;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@CrossOrigin(origins = "*")
@RestController
public class SentimentController {

    @Value("${sa.logic.api.url}")
    private String saLogicApiUrl;

    @PostMapping("/sentiment")
    public SentimentDto sentimentAnalysis(@RequestBody SentenceDto sentenceDto) {
//        System.out.println("Post request here");
        RestTemplate restTemplate = new RestTemplate();

        return restTemplate.postForEntity(saLogicApiUrl + "/analyse/sentiment",
                sentenceDto, SentimentDto.class)
                .getBody();
    }

    @PostMapping("/testHealth")
    public String testHealth(@RequestBody SentenceDto sentenceDto) {
        System.out.println("Post request here");

        RestTemplate restTemplate = new RestTemplate();

        System.out.println("SentenceDto = "+ sentenceDto.toString());




        return restTemplate.postForEntity(saLogicApiUrl + "/analyse/sentiment", sentenceDto, String.class).getBody();




    }
}


