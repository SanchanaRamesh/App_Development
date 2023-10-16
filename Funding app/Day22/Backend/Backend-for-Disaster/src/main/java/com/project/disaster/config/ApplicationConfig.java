package com.project.disaster.config;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.project.disaster.repository.CustomerRepository;

@Configuration
public class ApplicationConfig {
	@Autowired
	private  CustomerRepository usersRepository;
	@Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
	  @Bean
	    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration)
	            throws Exception {
	        return authenticationConfiguration.getAuthenticationManager();
	    }	
	  @Bean
	    public UserDetailsService userDetailsService() {
	        return username -> {
					return usersRepository.findByEmail(username)
					        .orElseThrow(() -> new UsernameNotFoundException("User not found...."));
				
			};
	    }
	    @Bean
	    public AuthenticationProvider authenticationProvider() {
	        DaoAuthenticationProvider daoAuthenticationProvider = new DaoAuthenticationProvider();
	        daoAuthenticationProvider.setUserDetailsService(userDetailsService());
	        daoAuthenticationProvider.setPasswordEncoder(passwordEncoder());
	        return daoAuthenticationProvider;
	    }

}
