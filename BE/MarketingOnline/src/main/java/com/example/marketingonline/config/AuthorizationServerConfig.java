//package com.example.marketingonline.config;
//
//
//import com.example.marketingonline.service.UserService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Qualifier;
//import org.springframework.context.annotation.Configuration;
//
//
//
//@Configuration
//@EnableAuthorizationServer
//public class AuthorizationServerConfig extends AuthorizationServerConfigurerAdapter {
//
//    private final TokenStore tokenStore = new InMemoryTokenStore();
//
//    //    @Value("${security.oauth2.client.client-id}")
//    private String clientId = "browser";
//    //    @Value("${security.oauth2.client.client-secret}")
//    private String clientSecret = "123456a@A";
//    //    @Value("${security.oauth2.client.grant-type}")
//    private String grantType = "password";
//
//    @Autowired
//    @Qualifier("authenticationManagerBean")
//    private AuthenticationManager authenticationManager;
//
//    @Autowired
//    private UserService userDetailsService;
//
//    @Override
//    public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
//        clients.inMemory()
//                .withClient(clientId)
//                .secret(clientSecret)
//                .authorizedGrantTypes(grantType, "refresh_token")
//                .accessTokenValiditySeconds(3600 * 24 * 7)
//                .scopes("ui");
//    }
//
//    @Override
//    public void configure(AuthorizationServerEndpointsConfigurer endpoints) {
//        endpoints
//                .tokenStore(tokenStore)
//                .authenticationManager(authenticationManager)
//                .userDetailsService(userDetailsService)
//                .pathMapping("/oauth/token", "/auth/login")
//        ;
//    }
//
//    @Override
//    public void configure(AuthorizationServerSecurityConfigurer oauthServer) {
//        oauthServer
//                .tokenKeyAccess("permitAll()")
//                .checkTokenAccess("isAuthenticated()")
//                .passwordEncoder(NoOpPasswordEncoder.getInstance())
//        ;
//    }
//}
