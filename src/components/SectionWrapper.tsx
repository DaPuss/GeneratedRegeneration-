import React from 'react'
import Divider from './SectionDivider/Divider'
const SectionWrapper = ({
  children,
  fill,
}: {
  children: React.ReactNode
  fill: string
}) => {
  return (
    <section style={{ position: 'relative' }}>
      {children}
      <Divider fill={fill} />
    </section>
  )
}

export default SectionWrapper
