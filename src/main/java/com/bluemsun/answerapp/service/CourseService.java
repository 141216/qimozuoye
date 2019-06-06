package com.bluemsun.answerapp.service;

import com.bluemsun.answerapp.entity.CourseBean;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by weizh on 2018/10/25.
 * @author weizh.
 */
@Service
public interface CourseService {
    public List<CourseBean> getAllCourseService();
}
