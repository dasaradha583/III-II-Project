package BBMS.Configs;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.session.web.http.CookieSerializer;
import org.springframework.session.web.http.DefaultCookieSerializer;

@Configuration
public class SessionConfig {

    @Bean
    public CookieSerializer cookieSerializer() {
        DefaultCookieSerializer serializer = new DefaultCookieSerializer();
        serializer.setCookieName("JSESSIONID"); // Customize the session cookie name
        serializer.setCookiePath("/"); // Set the cookie path
        serializer.setDomainNamePattern("^.+?\\.(\\w+\\.[a-z]+)$"); // Allow cookies for subdomains
        return serializer;
    }
}