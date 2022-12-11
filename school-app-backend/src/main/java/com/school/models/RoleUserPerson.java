package com.school.models;

import com.school.enums.RoleName;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "pessoa_usuario_regra", schema = "heroku_fdafa744b3499e8")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RoleUserPerson {

    @Id
    @Column(name = "nr_sequencia", length = 11)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long roleUserPersonSequenceNumber;

    @Column(name = "nr_seq_regra", nullable = false, length = 11)
    private Long roleSequenceNumber;

    @Column(name = "cd_pessoa_fisica", nullable = false, length = 11)
    private RoleName roleName;

}