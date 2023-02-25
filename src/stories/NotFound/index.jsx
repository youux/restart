import React from 'react'
import PropTypes from 'prop-types'
// 样式
import styles from './index.module.scss'
// 主体
export const NotFound = ({ dec }) => (
  <div className={styles['not-found']}>{dec}</div>
)

// 参数类型
NotFound.PropTypes = {
  dec: PropTypes.string
}
// 默然数据
NotFound.defaultProps = {
  dec: '暂无数据'
}
