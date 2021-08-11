
import request from '@/utils/request'
/**
 * @description 我的课表—-待上课程
 * @param studentUuid {String}  学生uuid
 * @param pageIndex {String}  当前页
 * @param pageSize {String}  页大小
*/
export function couresplanPendingCourse(data) {
  return request({
    url: '/app/couresplanapp/pendingCourse',
    method: 'post',
    data
  })
}

/**
 * @description 我的课表—-已上课程
 * @param studentUuid {String}  学生uuid
 * @param pageIndex {String}  当前页
 * @param pageSize {String}  页大小
*/
export function couresplanCoursesAlreadyTaken(data) {
  return request({
    url: '/app/couresplanapp/coursesAlreadyTaken',
    method: 'post',
    data
  })
}

/**
 * @description 请假/取消课程接口
 * @param studentUuid {String}  学生uuid
 * @param coursePlanUuid {String}  课节uuid
 * @param reason {String}  原因
 * @param remark {String}  备注
 * @param status {String}  0 取消课程 1请假
 * @param createUserUuid {String}  操作人uuid
*/
export function userappStudentLeave(data) {
  return request({
    url: '/app/userapp/studentLeave',
    method: 'post',
    data
  })
}

/**
 * @description 获取当前课包剩余请假次数
 * @param studentUuid {String}  学生uuid
 * @param coursePlanUuid {String}  课节uuid
*/
export function couresplanappGetStudentPackLeaveLimit(data) {
  return request({
    url: '/app/couresplanapp/getStudentPackLeaveLimit',
    method: 'post',
    data
  })
}

/**
* @description 排课
* @param {Sting} teacherUuid 老师uuid
* @param {Sting} studentUuid 学生uuid
* @param {string[]} currentTimes 排课具体时间数组 [开始时间段,结束时间段]
* @param {Sting} fileUuid 课件uuid
* @param {Sting} status 课节类型 0=正式课 1=试听课
*/
export function courseplanPlan(data) {
  return request({
    url: '/courseplan/plan',
    method: 'post',
    data: {
      fileUuid: '',
      status: 0,
      ...data
    }
  })
}

/**
* @description 固定课表-查询老师空闲时间
* @param {Sting} teacherUuid 老师uuid
* @param {Sting} week 星期
*/
export function ConfimplanSelectTimeByTea(data) {
  return request({
    url: '/confimplan/selectTimeByTea',
    method: 'post',
    data
  })
}

/**
* @description 固定课表-查询时间内空闲的老师
* @param {Sting} classDate 时间
* @param {Sting} week 星期
*/
export function ConfimplanSelectTeaByTime(data) {
  return request({
    url: '/confimplan/selectTeaByTime',
    method: 'post',
    data
  })
}

/**
* @description 新增固定课表
* @param {Sting} studentUuid 学员uuid
* @param {Sting} teacherUuid 老师uuid
* @param {array} array 固定课表时间数组（只需要开始时间）
*/
export function ConfimplanBatchInsert(data) {
  return request({
    url: '/confimplan/batchInsert',
    method: 'post',
    data
  })
}

/**
* @description 批量删除固定课表
* @param {array} array 固定课表uuid数组
*/
export function ConfimplanBatchDelete(data) {
  return request({
    url: '/confimplan/batchDelete',
    method: 'post',
    data
  })
}

/**
* @description 查询学员固定课表列表
* @param {Num} page 当前页码 默认1
* @param {Num} rows 一页显示条数 默认10
* @param {Sting} teacherUuid 老师uuid
* @param {Sting} studentUuid 学生uuid
*/
export function ConfimplanSearchPage(data) {
  return request({
    url: '/confimplan/searchPage',
    method: 'post',
    data
  })
}
