package com.school.models;

import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Collection;
import java.util.List;

@Entity
@Table(name = "pessoa_fisica", schema = "heroku_fdafa744b3499e8")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
public class PhysicalPersonModel implements UserDetails {

    @Id
    @Column(name = "cd_pessoa_fisica", length = 11)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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

    @Column(name = "ds_email", length = 100, nullable = false)
    private String email;

    @Column(name = "ds_senha")
    private String password;

    @Column(name = "ds_matricula", length = 11, nullable = false)
    private String username;

    // Users X Roles relationship - Spring Security
    @ManyToMany
    @JoinTable(name = "pessoa_usuario_regra",
            joinColumns = @JoinColumn(name = "cd_pessoa_fisica"),
            inverseJoinColumns = @JoinColumn(name = "nr_seq_regra"))
    private List<RoleModel> roles;

    // Bellow methods from UserDetails interface - Spring Security
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.roles;
    }

    @Override
    public String getPassword() {
        return this.password;
    }

    @Override
    public String getUsername() {
        return this.username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
