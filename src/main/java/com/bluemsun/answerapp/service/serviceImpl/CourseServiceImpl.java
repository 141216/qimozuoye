package com.bluemsun.answerapp.service.serviceImpl;

import com.bluemsun.answerapp.dao.CourseDao;
import com.bluemsun.answerapp.entity.CourseBean;
import com.bluemsun.answerapp.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by weizh on 2018/10/25.
 * @author weizh.
 */
@Service
public class CourseServiceImpl implements CourseService{
    @Autowired
    CourseDao courseDao;

    @Override
    public List<CourseBean> getAllCourseService() {
        return courseDao.getAllCourseDao();
    }
}
