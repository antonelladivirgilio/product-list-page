import breadcrumbChevron from '../../assets/breadcrumb_chevron.png';

import styles from './breadcrumbs.module.scss';

export function Breadcrumbs({ categories }) {

    const showBreadcrumbs = categories && categories.length > 0;
    const showChevron = categories.length - 1;

    return (
        <>
            {
                showBreadcrumbs && (
                    <ol className={styles.container_breadcrumbs}>
                        {
                            categories.map((category, index) => {

                                return (
                                    <li key={`category_${index}`} className={styles.breadcrumb_item}>
                                        <a href="#">{category}</a>
                                        {index !== showChevron && <img className={styles.breadcrumb_chevron} src={breadcrumbChevron} alt="flecha que apunta hacia la derecha" />}
                                    </li>
                                )
                            })
                        }
                    </ol>
                )
            }
        </>

    )
}