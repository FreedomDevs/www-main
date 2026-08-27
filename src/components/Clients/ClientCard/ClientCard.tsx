import Image from 'next/image';

import styles from './ClientCard.module.scss';

interface Client {
  name: string;
  logo: string;
  comment: string;
  author: string;
}

interface ClientCardProps {
  client: Client;
}

export function ClientCard({ client }: ClientCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.top}>
        <div className={styles.project}>
          <div className={styles.logo}>
            <Image src={client.logo} alt="" width={44} height={44} />
          </div>

          <div>
            <span className={styles.label}>PROJECT</span>
            <h3>{client.name}</h3>
          </div>
        </div>

        <span className={styles.index}>CLIENT / 01</span>
      </div>

      <div className={styles.quote}>
        <span className={styles.quoteMark}>“</span>

        <p>{client.comment}</p>
      </div>

      <div className={styles.bottom}>
        <div className={styles.author}>
          <span className={styles.authorLine} />
          <span>{client.author}</span>
        </div>

        <span className={styles.verified}>
          <span />
          VERIFIED CLIENT
        </span>
      </div>
    </article>
  );
}
