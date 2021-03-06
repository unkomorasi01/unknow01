package com.unknow01.ec.login;

import org.springframework.security.web.server.csrf.DefaultCsrfToken;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import javax.servlet.http.HttpServletRequest;
import org.springframework.security.web.csrf.CsrfToken;

@RestController
@RequestMapping("/csrf")
class LoginController {

    @GetMapping
    fun getCsrfToken(csrfToken: CsrfToken): String {
        return csrfToken.getToken()
    }

}