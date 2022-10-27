package com.school.general.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "cargo", schema = "heroku_fdafa744b3499e8")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Position {

    @Id
    @Column(name = "cd_cargo", length = 11)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long positionCode;

    @Column(name = "ds_cargo", length = 45)
    private String positionName;
}
