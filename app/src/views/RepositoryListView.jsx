import ImportRepositoryButton from "../components/ImportRepositoryButton";
import {Card, Container, Button, Row, Col} from "react-bootstrap";
import {useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';

export default function RepositoryListView() {
    const navigate = useNavigate();

    let repositories = useSelector(state => state.repositories.repositories);
    console.log(repositories)


    return <div className="App">
        <Container id={'mainContainer'} className={'d-flex justify-content-center align-items-center'}>
            <Row className={'repo-list'}>
                <Col xs={2}></Col>
                <Col xs={8}>
                    <ImportRepositoryButton/>

                    {repositories.map((repo) => {
                        return <Card className={'mt-3'} key={repo.id}>
                            <Card.Header>{repo.name}</Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col xs={10}>
                                        <Card.Text className={"repo-name"}>{repo.repositoryName}</Card.Text>
                                    </Col>
                                    <Col>
                                        <Button onClick={() => navigate(`/repositories/${repo.id}/builds`)} className={'view-builds-button'}>View Builds</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>

                    })}
                </Col>
                <Col xs={2}></Col>

            </Row>

        </Container>
    </div>
};