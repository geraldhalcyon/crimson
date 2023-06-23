import Link from 'next/link';
import styles from '../styles/breadcrumb.module.css'

const Breadcrumb = ({ crumbs }) => {
  return (
    <nav>
      <ul className={`flex ${styles.breadCrumb}`}>
        {crumbs.map((crumb, index) => (
          <li key={index} className='uppercase font-fourth text-[12px]'>
            {crumb.path ? (
              <Link  className='text-[var(--fifth-color)] hover:text-[#aaa]' href={crumb.path}>
                {crumb.label}
              </Link>
            ) : (
              <span>{crumb.label}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;