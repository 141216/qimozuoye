package com.bluemsun.answerapp.service;

import com.bluemsun.answerapp.entity.UserBean;
import org.springframework.stereotype.Service;

/**
 * Created by weizh on 2018/10/25.
 * @author weizh.
 */
@Service
public interface UserService {
    UserBean getUserByPwdAndUsername(String username, String pwd);
}
