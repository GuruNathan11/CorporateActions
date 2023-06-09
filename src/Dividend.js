import { CCard, CCardHeader, CCardBody } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilSearch } from '@coreui/icons';
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "http://elon-dividends.us-east-2.elasticbeanstalk.com/config/dividend/get-all"
    );
    const data = await response.json();
    setData(data.data);
  };

  return (
    <div>
      <h1>Dividends Declared</h1>
      <Table data={data} />
    </div>
  );
}

function Table(props) {
  const { data } = props;
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <CCard>
      <CCardHeader>
        <h3 className="d-flex justify-content-center">View Dividends declared by companies during the year</h3>
        <div className="search-input">
          <CIcon icon={cilSearch} style={{ width: '50px', marginTop: '10px' ,paddingRight:"10px" }} />
          <input
            type="text"
            placeholder="Search by Company Name"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </CCardHeader>

<CCardBody>
<table className="table">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Type</th>
            <th>FV</th>
            <th>Percentage<div>(%)</div></th>
            <th>Dividend Amount</th>
            <th>Announcement</th>
            <th>Record</th>
            <th>Ex Dividend</th>
          </tr>
        </thead>
        <tbody>
        {data.length === 0 ? (
              <tr>
                <td colSpan="3" className="no-results">
                  No Results Found
                </td>
              </tr>
            ) : (
              data
              .filter((item) => {
                if (searchTerm === '') {
                  return item;
                } else if (item.companyName.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return item;
                }
                return null;
              })
            .map((item, index) => (
              <tr key={item._id} className={index % 2 === 0 ? 'even' : 'odd'}>
              <td>{item.companyName}</td>
                <td>{item.type}</td>
                <td>{item.fv}</td>
                <td>{item.percentage}</td>
                <td>{item.dividendAmount}</td>
                <td>{item.announcement}</td>
                <td>{item.record}</td>
                <td>{item.ex_dividend}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      </CCardBody>
    </CCard>
  );
}

export default App;