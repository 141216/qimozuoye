package com.bluemsun.answerapp.dao;

import com.bluemsun.answerapp.entity.CourseBean;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by weizh on 2018/10/25.
 * @author weizh.
 */
@Repository
public interface CourseDao {
    List<CourseBean> getAllCourseDao();
}
