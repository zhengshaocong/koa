import request from '@/utils/request'

/**
* @description 推荐老师列表
* @param {String} pageIndex 当前页
* @param {String} pageSize 页大小

*/
export function userGetRecommendedTeacherList(data) {
  return request({
    url: '/user/getRecommendedTeacherList',
    method: 'post',
    data
  })
}

/**
* @description 获取用户详细信息
* @param {String} uuid 用户id
*/
export function userGetUserInfo(data) {
  return request({
    url: '/user/getUserInfo',
    method: 'post',
    data
  })
}

/**
* @description 获取简易 班主任/老师 列表
* @param {Number} type  0=学生 1=老师 2=班主任
* @param {Number} status 老师(0=不推荐 1=推荐)  学生(0=未分配 1=试听中 2=课程中 3=已结课) 班主任(0=在职1=停用)
* @param {String} keyword 搜索关键字（名称或手机号）
* @param {Number} page 页码
* @param {Number} rows 单页内容
*/
export function userSearchUserSimple(data) {
  return request({
    url: '/user/searchUserSimple',
    method: 'post',
    data
  })
}

/**
* @description 获取老师列表
* @param {Num} page 当前页码 默认1
* @param {Num} rows 一页显示条数 默认10
* @param {Num} type 用户类型 （type: 0学生 1老师 2班主任）
*/
export function userGetTeacherList(data) {
  return request({
    url: '/user/getTeacherList',
    method: 'post',
    data
  })
}

/**
* @description 获取老师开放时间
* @param {String} teacherUuid 老师id\
*/
export function teacherGetWorkPlan(data) {
  return request({
    url: '/teacher/getWorkPlan',
    method: 'post',
    data
  })
}

/**
* @description 课节列表（简）
* @param {Num} page 当前页码 默认1
* @param {Num} rows 一页显示条数 默认10
* @param {Sting} teacherUuid 老师uuid
* @param {Sting} studentUuid 学生uuid
* @param {Sting} startTime 查询开始时间
* @param {Sting} entTime 查询结束时间
*/
export function courseplanSearchPageSimple(data) {
  return request({
    url: '/courseplan/searchPageSimple',
    method: 'post',
    data
  })
}

/**
* @description 获取指定时间空闲老师列表
* @param {String} currentTimes 选择的时间数组格式:(开始时间,结束时间,星期几)
* @param {String} delayTimes 往后重复次数
* @param {String} teacherKeyWord 老师姓名模糊查询关键字
* @param {String} teachingAge 教龄
* @param {String} sex 性别 0=未知 1=男 2=女
* @param {Num} page 当前页码
* @param {Num} rows 一页显示条数
*/
export function courseplanGetTecaherByClassTime(data) {
  return request({
    url: '/courseplan/getTecaherByClassTime',
    method: 'post',
    data
  })
}

/**
 * @description: 获取老师时间段内的请假时间
* @param {String} teacherUuid		老师uuid
* @param {String} startTime		开始时间
* @param {String} endTime		结束时间
 */
export function teacherGetTeacherLeaveTimeByTimes(data) {
  return request({
    url: '/teacher/getTeacherLeaveTimeByTimes',
    method: 'post',
    data
  })
}

/**
 * @description: 获取老师详情 注意：不需要 token
* @param {String} uuid		老师uuid
 */
export function userappGetTeacherDetails(data) {
  return request({
    url: '/app/userapp/getTeacherDetails',
    method: 'post',
    data
  })
}

/**
 * @description: 获取老师的评价列表 注意：不需要 token
* @param {String} teacherUuid		老师uuid
* @param {String} pageIndex		页码
* @param {String} pageSize		每页数据条数
 */
export function userappGetTeacherEvaluationList(data) {
  return request({
    url: '/app/userapp/getTeacherEvaluationList',
    method: 'post',
    data
  })
}
