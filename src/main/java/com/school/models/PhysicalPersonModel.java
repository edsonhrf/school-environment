package com.school.models;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "pessoa_fisica", schema = "heroku_fdafa744b3499e8")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
public class PhysicalPersonModel {

    @Id
    @Column(name = "cd_pessoa_fisica", length = 11)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long physicalPersonCode;

    @Column(name = "ds_nome", length = 45, nullable = false)
    private String physicalPersonName;

    @Column(name = "nr_rg", length = 11, nullable = false)
    private Integer rgNumber;

    @Column(name = "nr_cpf", length = 11, nullable = false)
    private String texpayerIdNumber;

    @Column(name = "ie_sexo", length = 1, nullable = false)
    private Character gender;

    @Column(name = "dt_nascimento", nullable = false)
    private LocalDate birthDate;

    @Column(name = "nm_pai", length = 45)
    private String fatherName;

    @Column(name = "dt_nasc_pai")
    private LocalDate birthDateFather;

    @Column(name = "nm_mae", length = 45)
    private String motherName;

    @Column(name = "dt_nasc_mae")
    private LocalDate birthDateMother;

    @Column(name = "ds_rua", length = 45)
    private String addressDescription;

    @Column(name = "nr_residencia", length = 10)
    private Integer addressNumber;

    @Column(name = "ds_complemento", length = 45)
    private String addressComplement;

    @Column(name = "ds_bairro", length = 45)
    private String districtName;

    @Column(name = "ds_cidade", length = 45)
    private String cityName;

    @Column(name = "cd_cep", length = 11)
    private Integer zipCodeNumber;

    @Column(name = "nr_ddd", length = 11, nullable = false)
    private Integer areaCodeNumber;

    @Column(name = "nr_telefone", length = 11, nullable = false)
    private Integer telephoneNumber;

    @Column(name = "ds_email", length = 45, nullable = false)
    private String email;

    @Column(name = "ds_senha", length = 16)
    private String password;

}
