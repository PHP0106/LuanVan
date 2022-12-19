package com.example.cjx.service;

import com.example.cjx.domain.JourneyMatchingColumn;
import com.example.cjx.dto.JourneyMatchingColumnDTO;

import java.util.HashMap;
import java.util.List;

public interface JourneyMatchingColumnService {
    HashMap<String, Object> getReviewMappingFile(Long reportId);
    HashMap<String, Object> createReviewMappingFile(List<JourneyMatchingColumnDTO> journeyMatchingColumnDTOList, String mappingFileName);
}
