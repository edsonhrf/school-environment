package com.school.config.security;

import com.school.models.PhysicalPersonModel;
import com.school.repositories.PhysicalPersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class UserDetailsServiceImpl implements UserDetailsService  {

    @Autowired
    PhysicalPersonRepository physicalPersonRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        PhysicalPersonModel physicalPersonModel = physicalPersonRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with enrollment " + username));
        return new User(physicalPersonModel.getUsername(), physicalPersonModel.getPassword(), true, true, true, true, physicalPersonModel.getAuthorities());
    }
}
