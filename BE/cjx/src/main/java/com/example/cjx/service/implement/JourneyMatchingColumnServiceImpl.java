package com.example.cjx.service.implement;

import com.example.cjx.Extend.ResponseUtil;
import com.example.cjx.domain.JourneyMatchingColumn;
import com.example.cjx.domain.JourneyMatchingReport;
import com.example.cjx.dto.JourneyMatchingColumnDTO;
import com.example.cjx.mapstruct.JourneyMatchingColumnMapper;
import com.example.cjx.repository.JourneyMatchingColumnRepository;
import com.example.cjx.repository.JourneyMatchingReportRepository;
import com.example.cjx.service.JourneyMatchingColumnService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service
public class JourneyMatchingColumnServiceImpl implements JourneyMatchingColumnService {

    @Autowired
    private JourneyMatchingColumnRepository journeyMatchingColumnRepository;

    @Autowired
    private JourneyMatchingReportRepository journeyMatchingReportRepository;

    private JourneyMatchingColumnMapper journeyMatchingColumnMapper;

    @Override
    public HashMap<String, Object> getReviewMappingFile(Long reportId) {



        List<JourneyMatchingColumn> journeyMatchingColumnList = journeyMatchingColumnRepository.findAllByReportId(reportId);
        if (journeyMatchingColumnList.isEmpty()) {
            return ResponseUtil.errorNotFound("journeyMatchingColumn");
        }

        return ResponseUtil.succeed(journeyMatchingColumnList);
    }

    @Override
    public HashMap<String, Object> createReviewMappingFile(List<JourneyMatchingColumnDTO> journeyMatchingColumnDTOList, String mappingFileName) {

        JourneyMatchingReport journeyMatchingReport = new JourneyMatchingReport();
        journeyMatchingReport.setName(mappingFileName);
        journeyMatchingReport = journeyMatchingReportRepository.save(journeyMatchingReport);

        for (JourneyMatchingColumnDTO journeyMatchingColumnDTO : journeyMatchingColumnDTOList) {
            JourneyMatchingColumn journeyMatchingColumn = journeyMatchingColumnMapper.toEntity(journeyMatchingColumnDTO);
            journeyMatchingColumn.setJourneyColumn(journeyMatchingColumnDTO.getJourneyColumn());
            journeyMatchingColumn.setFunction(journeyMatchingColumnDTO.getFunction());
            journeyMatchingColumn.setReportColumn(journeyMatchingColumnDTO.getReportColumn());
            journeyMatchingColumn.setReportId(journeyMatchingReport.getId());
            journeyMatchingColumnRepository.save(journeyMatchingColumn);
        }

        return ResponseUtil.succeed();
    }

}
