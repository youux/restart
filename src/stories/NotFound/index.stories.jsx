import React from 'react'

import { NotFound } from './index'

export default {
  title: 'NotFound',
  component: NotFound
}

const Template = (args) => <NotFound {...args} />

export const Starta = Template.bind({})
Starta.args = {
  dec: '内容1'
}
