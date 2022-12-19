//package com.example.marketingonline.config;
//
//import com.example.oauth.service.UserService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.web.cors.CorsConfiguration;
//
//@Configuration
////@EnableWebSecurity
////@EnableGlobalMethodSecurity(prePostEnabled = true)
////@EnableAutoConfiguration
//public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
//
//    @Autowired
//    private UserService userDetailsService;
//
//
//@Override
//protected void configure(HttpSecurity http) throws Exception {
//    CorsConfiguration corsConfiguration = new CorsConfiguration();
//    corsConfiguration.applyPermitDefaultValues();
//    http
//            .cors()
//            .and().authorizeRequests()
//            .anyRequest().authenticated()
//            .and().csrf().disable()
//    ;
//}
//
////    @Override
////    public void configure(WebSecurity web) {
////        web
////                .ignoring()
////                .antMatchers(
////                        HttpMethod.GET,
////                        "/*.html",
////                        "/**/*.html",
////                        "/**/*.css",
////                        "/**/*.js",
////                        "/v3/api-docs/**",
////                        "/swagger-ui.html",
////                        "/swagger-resources/**",
////                        "/webjars/**"
////                ).antMatchers(
////                "/auth/sendOTP",
////                "/auth/checkResetPassword",
////                "/auth/resetPassword"
////        )
////        ;
////    }
//
//    @Override
//    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//        auth.userDetailsService(userDetailsService)
//                .passwordEncoder(new BCryptPasswordEncoder());
//    }
//
//    @Override
//    @Bean
//    public AuthenticationManager authenticationManagerBean() throws Exception {
//        return super.authenticationManagerBean();
//    }
//
////    @Bean
////    CorsConfigurationSource corsConfigurationSource() {
////        CorsConfiguration configuration = new CorsConfiguration();
////        configuration.setAllowedHeaders(Arrays.asList("Authorization", "Cache-Control", "Content-Type"));
////        configuration.setAllowedOrigins(Arrays.asList("http://localhost:8080", "http://dienquang-retailer.imt-soft.com"));
////        configuration.setAllowedMethods(Arrays.asList("GET","POST"));
////        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
////        source.registerCorsConfiguration("/**", configuration);
////        return source;
////    }
//}
