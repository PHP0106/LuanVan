package com.example.cjx.mapstruct;


import com.example.cjx.Extend.BaseMapper;
import com.example.cjx.domain.JourneyMatchingColumn;
import com.example.cjx.dto.JourneyMatchingColumnDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface JourneyMatchingColumnMapper extends BaseMapper<JourneyMatchingColumnDTO, JourneyMatchingColumn> {
    @Mapping(source = "report.id", target = "reportId")
    JourneyMatchingColumnDTO toDto(JourneyMatchingColumn entity);
}
