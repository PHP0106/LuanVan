package com.example.cjx.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class JourneyMatchingColumnDTO {
    private Long id;
    private String journeyColumn;
    private String reportColumn;
    private String function;
    private String reportId;
}
