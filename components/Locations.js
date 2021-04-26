import { useQuery, gql  } from "@apollo/client";
import styles from "../styles/Home.module.css";

const QUERY = gql`
  query Countries {
    countries {
      code
      name
      emoji
    }
}`;

export default function Locations() {
  const { data, loading, error } = useQuery(QUERY);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const locations = data.locations;
  console.error(locations)

  return (
    <div className={styles.grid}>
    {locations.map((country) => (
      <div key={country.code} className={styles.card}>
      <h3>{country.name}</h3>
      <p>
      {country.code} - {country.emoji}
      </p>
      </div>
    ))}
    </div>
  );
};

