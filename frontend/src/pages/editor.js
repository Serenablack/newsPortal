import React from 'react'

import { Container, Paper } from "@mui/material";
import Chip from "@mui/material/Chip";

import DynamicTabs from "../components/Tab";
import DynamicVictoryChart from "../components/VictoryChart";
import DynamicTable from "../components/Table";
import ResponsiveAppBar from "../components/AppBar"

function editor() {

    const dashboardData = [
        { x: "Published", y: 8 },
        { x: "Pending", y: 2 },
        { x: "Rejected", y: 1 },
      ];

      const dateNow = new Date().toDateString();
      const articlerows = [
        {
          articleId: "1",
          title: "Fire Engulfs City Block",
          author: "John Doe",
          date: dateNow,
          status: <Chip label="Posted" color="success" variant="outlined" />,
        },
      ];
    
      const articlecolumns = [
        { id: "articleId", label: "Article Id" },
        { id: "title", label: "Title" },
        { id: "author", label: "Author" },
        { id: "date", label: "Date Published" },
        {
          id: "status",
          label: "Status",
        },
      ];
      function handleButtonClick(row) {
        console.log("Button clicked for row:", row);
      }

    const tabsData = [
        {
          label: "DASHBOARD",
          component: (
            <div style={{width:'90%', height:'60%'}}>
              <DynamicVictoryChart datasets={dashboardData} />
            </div>
          ),
        },
        { label: "Write a news", component:(
        <div>
            The editor component will be here
    
        </div>)  },
        {
          label: "ARTICLES",
          component: (
            <div>
              <DynamicTable
                rows={articlerows}
                columns={articlecolumns}
                button={true}
                buttonText="Details"
                onClick={handleButtonClick}
              />
            </div>
          ),
        },
      ];

  return (
    <div>
      <ResponsiveAppBar/>
    <Container sx={{ mt: "30px", padding: "50px" }}>
      <Paper elevation={5}>
        <DynamicTabs tabs={tabsData} />
      </Paper>
    </Container>
    </div>
  )
}

export default editor
