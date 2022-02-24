import { useRouter } from 'next/router';
import { Box, Text, Button } from 'theme-ui';

export default function Row({ data }) {

    const router = useRouter();
    if (router.isFallback) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <Box sx={{
                display: "grid",
                gridTemplateAreas: "'rank name button'",
                gridTemplateColumns: "10% 90%",
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
            </Box>

            {data?.length && data.map((item) => (
            <Box key={item.res} sx={{
                display: "grid",
                gridTemplateAreas: "'rank name button'",
                gridTemplateColumns: "10% 75% 15%",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: 'beige'
            }}>
                <Text sx={{
                    gridArea: "rank",
                    fontSize: "1rem",
                    display: "grid",
                    textAlign: "left",
                    color: 'black'
                }}>{item.rank}</Text>
                <Text sx={{
                    gridArea: "name",
                    fontSize: "1rem",
                    display: "grid",
                    textAlign: "left",
                    color: 'black'
                }}>{item.name}</Text>
                <Button sx={{
                    gridArea: "button",
                    fontSize: "1rem",
                    display: "grid",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "left",
                    color: 'black',
                    cursor: 'pointer',
                    backgroundColor: 'red',
                    color: 'white'
                }}>Notify</Button>
            </Box>
            ))}
        </div>
    )
}


export async function getStaticProps() {
    const leaderboard = await fetch("api/hello")
    const res = await leaderboard.json()

    return {
        props: {
            data: res
        }
    }
}