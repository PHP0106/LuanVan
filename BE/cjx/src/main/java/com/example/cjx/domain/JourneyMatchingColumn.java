package com.example.cjx.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Table(name = "journey_matching_column")
@Entity
public class JourneyMatchingColumn {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "journey_column", length = 50)
    private String journeyColumn;

    @Column(name = "report_column", length = 50)
    private String reportColumn;

    @Column(name = "function", length = 50)
    private String function;

//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "report_id")
//    private JourneyMatchingReport report;
    @Column(name = "report_id")
    private Long reportId;
}