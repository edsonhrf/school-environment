package com.school.models;

import com.school.enums.RoleName;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.extern.apachecommons.CommonsLog;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;

@Entity
@Table(name = "regra")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RoleModel implements GrantedAuthority {

    @Id
    @Column(name = "nr_seq_regra", length = 11)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long roleSequenceNumber;

    @Enumerated(EnumType.STRING)
    @Column(name = "ds_regra", nullable = false, unique = true)
    private RoleName roleName;

    @Override
    public String getAuthority() {
        return this.roleName.toString();
    }
}
