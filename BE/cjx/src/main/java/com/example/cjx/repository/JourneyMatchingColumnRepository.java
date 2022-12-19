package com.example.cjx.repository;

import com.example.cjx.domain.JourneyMatchingColumn;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface JourneyMatchingColumnRepository extends JpaRepository<JourneyMatchingColumn, Long> {

    List<JourneyMatchingColumn> findAllByReportId(Long reportId);

}
