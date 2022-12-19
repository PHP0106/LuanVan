package com.example.cjx.client;

import com.example.cjx.dto.JourneyMatchingColumnDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(url = "localhost:8000")
public interface CjxServiceClient {
    @GetMapping(value = {"/journey/import/review-mapping-file"})
    JourneyMatchingColumnDTO getReviewMappingFile(@PathVariable(name = "") String reportId);
}