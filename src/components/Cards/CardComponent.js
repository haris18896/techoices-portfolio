import React, { forwardRef, useState, useEffect } from 'react';
import Modal from 'react-modal';
import { nanoid } from 'nanoid';
import Proptypes from 'prop-types';
import { DataList } from './Lists/Lists';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { CardSectionStyles } from '../../css/portfolio/PortfolioStyles';

import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Skeleton
} from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export function SkeletonItem() {
  return <Skeleton sx={{ borderRadius: '50%', margin: '15px' }} animation='wave' variant='circular' width={50} height={50} />;
}

const styles = {
  media: {
    height: '450px'
  }
};

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    overflow: 'hidden',
    maxHeight: '85vh',
    padding: '0px',
    backgroundColor: 'transparent',
    border: 'none'
  },
  overlay: {
    zIndex: '14',
    backgroundColor: 'rgba(0,0,0,.4)'
  }
};

Modal.setAppElement('#app');

const CardComponent = forwardRef((props, ref) => {
  let i = 0;
  const { id } = props;
  const [showMore, setShowMore] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [data, setData] = useState({});

  const classes = CardSectionStyles();

  useEffect(() => {
    return () => {
      setShowMore(false);
    };
  }, []);

  Modal.setAppElement('#app');

  const OpenModal = (id, itemIndex) => {
    setIsOpen(true);
    setData(DataList[id].list[itemIndex]);
    console.log(DataList[id]);
  };

  const closeModal = () => {
    setIsOpen(false);
    setData(null);
  };

  if (id === 'all') {
    const Entries = Object.entries(DataList);

    const OpenModalAll = (id, itemIndex, cardIndex) => {
      setIsOpen(true);
      setData(cardIndex[itemIndex]);
    };
    return (
      <>
        {modalIsOpen && data && (
          <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
            <img src={data.pic} alt={data.alt} className={classes.modal_Img_styling} />
          </Modal>
        )}
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='flex-start'
          spacing={3}
          style={{ paddingLeft: '20px', paddingRight: '20px' }}
          _id={id ? id : null}
          ref={ref}
        >
          {Entries.slice(0, showMore ? Entries.length : 1).map(([_, value]) => {
            return value.list.map((CardItems, itemIndex, cardIndex) => (
              <React.Fragment key={nanoid()}>
                <Grid item xs={12} sm={6} md={4} className={classes.Card_component_Styling} key={i++}>
                  <Card
                    sx={{ maxWidth: 500, marginBottom: 3, boxShadow: 'none' }}
                    onClick={() => OpenModalAll(id, itemIndex, cardIndex)}
                    className={classes.Main_Card}
                  >
                    <FullscreenIcon className={classes.full_screen_btn} />
                    <CardMedia component='img' alt='green iguana' src={CardItems.pic} style={styles.media} />

                    <CardContent className={classes.card_background}>
                      <Typography gutterBottom variant='h5' component='div' className={classes.icons__Styles}>
                        <LazyLoadImage alt={CardItems.alt} src={CardItems.icon} placeholder={<SkeletonItem />} />
                      </Typography>
                      <Typography variant='h5' component='h1' style={{ marginTop: '15px' }} className={classes.Headings}>
                        {CardItems.heading}
                      </Typography>
                      <Typography
                        className={classes.description_styling}
                        style={{ marginTop: '15px' }}
                        dangerouslySetInnerHTML={{ __html: CardItems.description || '' }}
                      />
                    </CardContent>

                    <CardActions className={classes.card_background_actions}>
                      <List>
                        <ListItem className={classes.listItem}>
                          <Stack direction='column'>
                            {/* cardItems loop over */}
                            {CardItems.items.map(item => (
                              <Stack direction='row' justifyContent='flex-start' alignItems='center' key={item.id}>
                                <ListItemIcon style={{ minWidth: '40px' }}>{item.itemIcon}</ListItemIcon>
                                <ListItemText primary={item.itemText} className={classes.list_Item_text} />
                              </Stack>
                            ))}
                          </Stack>
                        </ListItem>
                      </List>
                    </CardActions>
                  </Card>
                </Grid>
              </React.Fragment>
            ));
          })}
        </Grid>
        <Stack direction='row' justifyContent='center' alignItems='center' className={classes.show_more_btn_container}>
          <button className={showMore ? `${classes.display_none}` : ''} onClick={() => setShowMore(true)}>
            Show more
          </button>
        </Stack>
      </>
    );
  } else {
    return (
      <>
        {modalIsOpen && data && (
          <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
            <img src={data.pic} alt={data.alt} className={classes.modal_Img_styling} />
          </Modal>
        )}
        <Grid
          container
          direction='row'
          justifyContent='flex-start'
          alignItems='flex-start'
          spacing={3}
          style={{ paddingLeft: '20px', paddingRight: '20px' }}
          _id={id ? id : null}
          ref={ref}
        >
          {DataList[id].list.map((CardItems, itemIndex) => (
            <Grid item xs={12} sm={6} md={4} className={classes.Card_component_Styling} key={i++}>
              <Card
                sx={{ maxWidth: 500, margin: 0, boxShadow: 'none' }}
                onClick={() => OpenModal(id, itemIndex)}
                className={classes.Main_Card}
              >
                <CardMedia component='img' alt='green iguana' height='450' src={CardItems.pic} />
                <CardContent className={classes.card_background}>
                  <Typography gutterBottom variant='h5' component='div' className={classes.icons__Styles}>
                    <LazyLoadImage alt={CardItems.alt} src={CardItems.icon} placeholder={<SkeletonItem />} />
                  </Typography>
                  <Typography variant='h5' component='h1' style={{ marginTop: '15px' }}>
                    {CardItems.heading}
                  </Typography>
                  <Typography
                    style={{ marginTop: '15px' }}
                    className={classes.description_styling}
                    dangerouslySetInnerHTML={{ __html: CardItems.description || '' }}
                  />
                </CardContent>

                <CardActions className={classes.card_background_actions}>
                  <List>
                    <ListItem>
                      <Stack direction='column'>
                        {/* cardItems loop over */}
                        {CardItems.items.map(item => (
                          <Stack direction='row' justifyContent='space-between' alignItems='center' key={item.id}>
                            <ListItemIcon>{item.itemIcon}</ListItemIcon>
                            <ListItemText primary={item.itemText} className={classes.list_Item_text} />
                          </Stack>
                        ))}
                      </Stack>
                    </ListItem>
                  </List>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </>
    );
  }
});

export default CardComponent;

CardComponent.propTypes = {
  id: Proptypes.string
};
