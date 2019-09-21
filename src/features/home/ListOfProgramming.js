import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './redux/actions';

export class ListOfProgramming extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="home-list-of-programming">
        <section className="bg-light pb-4 pb-lg-5 pb-sm-4 pt-4 pt-lg-5 pt-sm-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <div className="card mb-4 text-center">
                  <div className="px-4 py-5">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAACd0lEQVRoge2aTWsUQRCGnySrsEHNhgQjaBC8xG+IonfBo5eIXrx48JC/4EHBnyCCRBBPghIN5BgCyS9QUAwmqPELISpGw24UDR7WQ+/C0PT09NC9vcNYD9Sht7pq6t2dqemZbRAEQRAEoeiMAjNAA2gWzBrALDAWUuz3AgjLsh+tWr2ZKYAYV3uUJabHQXAD2Okwrwg0gAHbBBfBzTC1RMOqqTdWFUVBBJcdEVx2RHDZEcFlRwSXHRFcdkRw2fnvBFe6XYCFL8AT4HNrvA84DQx3+sAh3jX9ypH3DXAO89lXAS4AHyzx3sQU/AyoOdQ0DCyl5PAmpuBxbc4AMNGyQc13MiWHN7EEL2n+3ajrt+3fAI5rc14Y8lgpUtN6p40PA3sS4xpwC5hLfNbXiUJi/cILmr8XuAGs5TyWN7EEbwK7Umo4gOrON4HVjGN5E7NpTTnWdAZ4n5LDm5iCm6j/sg451LUfqBvivYktuG0rqCZ1GTiYUtttQ5w3rqK+Am8T9jvh+6nl7MmRt22vUEvLJFe6KXhSi3uQ8L3UfDVD/BRwMWFPDXPuankmDXOshLwPH9PG11GLhyHgquY7aojfAB4nxp9Q1/Pe1ngduKfF6AuRIOQ5pXc45rxjiP8I9GvzKsAR4ARQ1XxDqC+hq03rPtnP2GeBvynxD4FtDjVVgfmUHN7kbS6LwClDnkHgGvAnI/45cB7YbshRBS4Bry3xVjq5A2AN9Wy7BYygTs08PWMLWAa+oeocQd2fs84AqybZ8mBgM1AhMahnTXARvBigkFjMh0gyhtr0lbd5xbZ11Iu+IIyiNn2ZFuvdtjowHVKsIAiCIAid4R9o2Iz1qzpESAAAAABJRU5ErkJggg==" />
                  </div>
                  <div className="px-4 pb-5">
                    <h5>JavaScript</h5>
                    <Link to="/java-script">JavaScript</Link>
                    <p className="text-muted">Impress with these beautiful landing pages.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="card mb-4 text-center">
                  <div className="px-4 py-5">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAACd0lEQVRoge2aTWsUQRCGnySrsEHNhgQjaBC8xG+IonfBo5eIXrx48JC/4EHBnyCCRBBPghIN5BgCyS9QUAwmqPELISpGw24UDR7WQ+/C0PT09NC9vcNYD9Sht7pq6t2dqemZbRAEQRAEoeiMAjNAA2gWzBrALDAWUuz3AgjLsh+tWr2ZKYAYV3uUJabHQXAD2Okwrwg0gAHbBBfBzTC1RMOqqTdWFUVBBJcdEVx2RHDZEcFlRwSXHRFcdkRw2fnvBFe6XYCFL8AT4HNrvA84DQx3+sAh3jX9ypH3DXAO89lXAS4AHyzx3sQU/AyoOdQ0DCyl5PAmpuBxbc4AMNGyQc13MiWHN7EEL2n+3ajrt+3fAI5rc14Y8lgpUtN6p40PA3sS4xpwC5hLfNbXiUJi/cILmr8XuAGs5TyWN7EEbwK7Umo4gOrON4HVjGN5E7NpTTnWdAZ4n5LDm5iCm6j/sg451LUfqBvivYktuG0rqCZ1GTiYUtttQ5w3rqK+Am8T9jvh+6nl7MmRt22vUEvLJFe6KXhSi3uQ8L3UfDVD/BRwMWFPDXPuankmDXOshLwPH9PG11GLhyHgquY7aojfAB4nxp9Q1/Pe1ngduKfF6AuRIOQ5pXc45rxjiP8I9GvzKsAR4ARQ1XxDqC+hq03rPtnP2GeBvynxD4FtDjVVgfmUHN7kbS6LwClDnkHgGvAnI/45cB7YbshRBS4Bry3xVjq5A2AN9Wy7BYygTs08PWMLWAa+oeocQd2fs84AqybZ8mBgM1AhMahnTXARvBigkFjMh0gyhtr0lbd5xbZ11Iu+IIyiNn2ZFuvdtjowHVKsIAiCIAid4R9o2Iz1qzpESAAAAABJRU5ErkJggg==" />
                  </div>
                  <div className="px-4 pb-5">
                    <h5>JavaScript</h5>
                    <Link to="/java-script">JavaScript</Link>
                    <p className="text-muted">Impress with these beautiful landing pages.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="card mb-4 text-center">
                  <div className="px-4 py-5">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAACd0lEQVRoge2aTWsUQRCGnySrsEHNhgQjaBC8xG+IonfBo5eIXrx48JC/4EHBnyCCRBBPghIN5BgCyS9QUAwmqPELISpGw24UDR7WQ+/C0PT09NC9vcNYD9Sht7pq6t2dqemZbRAEQRAEoeiMAjNAA2gWzBrALDAWUuz3AgjLsh+tWr2ZKYAYV3uUJabHQXAD2Okwrwg0gAHbBBfBzTC1RMOqqTdWFUVBBJcdEVx2RHDZEcFlRwSXHRFcdkRw2fnvBFe6XYCFL8AT4HNrvA84DQx3+sAh3jX9ypH3DXAO89lXAS4AHyzx3sQU/AyoOdQ0DCyl5PAmpuBxbc4AMNGyQc13MiWHN7EEL2n+3ajrt+3fAI5rc14Y8lgpUtN6p40PA3sS4xpwC5hLfNbXiUJi/cILmr8XuAGs5TyWN7EEbwK7Umo4gOrON4HVjGN5E7NpTTnWdAZ4n5LDm5iCm6j/sg451LUfqBvivYktuG0rqCZ1GTiYUtttQ5w3rqK+Am8T9jvh+6nl7MmRt22vUEvLJFe6KXhSi3uQ8L3UfDVD/BRwMWFPDXPuankmDXOshLwPH9PG11GLhyHgquY7aojfAB4nxp9Q1/Pe1ngduKfF6AuRIOQ5pXc45rxjiP8I9GvzKsAR4ARQ1XxDqC+hq03rPtnP2GeBvynxD4FtDjVVgfmUHN7kbS6LwClDnkHgGvAnI/45cB7YbshRBS4Bry3xVjq5A2AN9Wy7BYygTs08PWMLWAa+oeocQd2fs84AqybZ8mBgM1AhMahnTXARvBigkFjMh0gyhtr0lbd5xbZ11Iu+IIyiNn2ZFuvdtjowHVKsIAiCIAid4R9o2Iz1qzpESAAAAABJRU5ErkJggg==" />
                  </div>
                  <div className="px-4 pb-5">
                    <h5>JavaScript</h5>
                    <Link to="/java-script">JavaScript</Link>
                    <p className="text-muted">Impress with these beautiful landing pages.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="card mb-4 text-center">
                  <div className="px-4 py-5">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAACd0lEQVRoge2aTWsUQRCGnySrsEHNhgQjaBC8xG+IonfBo5eIXrx48JC/4EHBnyCCRBBPghIN5BgCyS9QUAwmqPELISpGw24UDR7WQ+/C0PT09NC9vcNYD9Sht7pq6t2dqemZbRAEQRAEoeiMAjNAA2gWzBrALDAWUuz3AgjLsh+tWr2ZKYAYV3uUJabHQXAD2Okwrwg0gAHbBBfBzTC1RMOqqTdWFUVBBJcdEVx2RHDZEcFlRwSXHRFcdkRw2fnvBFe6XYCFL8AT4HNrvA84DQx3+sAh3jX9ypH3DXAO89lXAS4AHyzx3sQU/AyoOdQ0DCyl5PAmpuBxbc4AMNGyQc13MiWHN7EEL2n+3ajrt+3fAI5rc14Y8lgpUtN6p40PA3sS4xpwC5hLfNbXiUJi/cILmr8XuAGs5TyWN7EEbwK7Umo4gOrON4HVjGN5E7NpTTnWdAZ4n5LDm5iCm6j/sg451LUfqBvivYktuG0rqCZ1GTiYUtttQ5w3rqK+Am8T9jvh+6nl7MmRt22vUEvLJFe6KXhSi3uQ8L3UfDVD/BRwMWFPDXPuankmDXOshLwPH9PG11GLhyHgquY7aojfAB4nxp9Q1/Pe1ngduKfF6AuRIOQ5pXc45rxjiP8I9GvzKsAR4ARQ1XxDqC+hq03rPtnP2GeBvynxD4FtDjVVgfmUHN7kbS6LwClDnkHgGvAnI/45cB7YbshRBS4Bry3xVjq5A2AN9Wy7BYygTs08PWMLWAa+oeocQd2fs84AqybZ8mBgM1AhMahnTXARvBigkFjMh0gyhtr0lbd5xbZ11Iu+IIyiNn2ZFuvdtjowHVKsIAiCIAid4R9o2Iz1qzpESAAAAABJRU5ErkJggg==" />
                  </div>
                  <div className="px-4 pb-5">
                    <h5>JavaScript</h5>
                    <Link to="/java-script">JavaScript</Link>
                    <p className="text-muted">Impress with these beautiful landing pages.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fluid-paragraph text-center mt-5">
            <p>
              <strong className="text-primary">*Good to know!</strong> You are not limited to the
              examples we've built. We have the liberty to choose any of the page layouts and
              components from the package and create your own version.
            </p>
          </div>
        </section>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    home: state.home,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListOfProgramming);
