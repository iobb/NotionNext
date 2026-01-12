import { siteConfig } from '@/lib/config'

/**
 * 驱动版权
 * @returns
 */
export default function PoweredBy(props) {
  return (
    <div className={`inline text-sm font-serif ${props.className || ''}`}>
      <span className='mr-1'>$</span>
      <a
        href='https://icp.gov.moe/?keyword=20269990'
        className='underline justify-start'>
        萌ICP备20269990号 
      </a>
      <span className='mr-1'>by</span>
      <a
        href='https://github.com/tangly1024/NotionNext'
        className='underline justify-start'>
        NotionNext {siteConfig('VERSION')}
      </a>
      .
    </div>
  )
}
