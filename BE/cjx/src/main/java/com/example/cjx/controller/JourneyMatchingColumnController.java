package com.example.cjx.controller;


import com.example.cjx.dto.JourneyMatchingColumnDTO;
import com.example.cjx.service.JourneyMatchingColumnService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(value = {"/cjx/journeyMatchingFile"})
public class JourneyMatchingColumnController {

    @Autowired
    JourneyMatchingColumnService journeyMatchingColumnService;

    @GetMapping(value = "/reviewMappingFile")
    public ResponseEntity<Object> getReviewMappingFile(
            @RequestParam Long reportId) {
        return new ResponseEntity<>(journeyMatchingColumnService.getReviewMappingFile(reportId), HttpStatus.OK);
    }

    @PostMapping(value = "/uploadMatchingFile")
    public ResponseEntity<Object> uploadMatchingFile(
            @Valid @RequestBody List<JourneyMatchingColumnDTO> journeyMatchingColumnDTOList,
            @RequestParam String mappingFileName) {
        return new ResponseEntity<>(journeyMatchingColumnService.createReviewMappingFile(journeyMatchingColumnDTOList, mappingFileName), HttpStatus.OK);
    }



}
