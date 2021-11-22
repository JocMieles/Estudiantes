import sql from 'mssql';

import keys from './keys' 

export const getConnection = async () => {
    try {
      const pool = await sql.connect(keys.database);
      return pool;
    } catch (error) {
      console.error(error);
    }
  };
  
  export { sql };
  