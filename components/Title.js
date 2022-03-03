import { Box, Text } from 'theme-ui'
import React from 'react';


export default function Title() {

    return (
        <Box sx={{
            display: "grid",
            gridTemplateAreas: "'rank name score'",
            gridTemplateColumns: "10% 40% 50%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: 'lightBlue',
            marginBottom: '1rem'
        }}>
            <Text sx={{
                gridArea: "rank",
                fontSize: "1rem",
                display: "grid",
                textAlign: "left",
                color: 'black'
            }}>#</Text>
            <Text sx={{
                gridArea: "name",
                fontSize: "1rem",
                display: "grid",
                textAlign: "left",
                color: 'black'
            }}>Player</Text>
            <Text sx={{
                gridArea: "score",
                fontSize: "1rem",
                display: "grid",
                textAlign: "left",
                color: 'black'
            }}>Score</Text>
        </Box>
    )
}
