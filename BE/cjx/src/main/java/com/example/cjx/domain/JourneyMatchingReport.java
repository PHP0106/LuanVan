package com.example.cjx.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Table(name = "journey_matching_report")
@Entity
public class JourneyMatchingReport {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "name", length = 50)
    private String name;

    @Column(name = "staff", length = 150)
    private String staff;

    @Column(name = "staff_id")
    private Integer staffId;

    @Column(name = "instruction_link", length = 150)
    private String instructionLink;

}