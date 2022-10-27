package com.school.general.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "nota", schema = "heroku_fdafa744b3499e8")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Grade {

    @Id
    @Column(name = "nr_sequencia", length = 11)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long gradeSequenceNumber;

    @Column(name = "nota_prim_bim")
    private Float firstBimesterGrade;

    @Column(name = "nota_seg_bim")
    private Float secondBimesterGrade;

    @Column(name = "nota_recup_prim_sem")
    private Float firstSemesterRecoverGrade;

    @Column(name = "nota_ter_bim")
    private Float thirdBimesterGrade;

    @Column(name = "nota_quar_bim")
    private Float fourthBimester;

    @Column(name = "nota_recup_seg_sem")
    private Float secondSemesterRecoverGrade;

    //Recebe como chave estrangeira o código do aluno

    //Recebe como chave estrangeira o código da disciplina




}
