import React, { useEffect } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useDispatch, useSelector } from 'react-redux'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { PostList } from '../components/PostList'
import { loadPosts } from '../store/actions/post'

export const BookedScreen = ({ navigation }) => {
  const openPostHandler = (post) => {
    navigation.navigate('Post', {
      postId: post.id,
      date: post.date,
      booked: post.booked,
    })
  }
  // данные уже загружены в MainScreen
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(loadPosts())
  // }, [dispatch])

  const bookedPosts = useSelector((state) => state.post.bookedPosts)

  return <PostList data={bookedPosts} onOpen={openPostHandler} />
}

BookedScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Избранное',

  headerLeft: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toggle Drawer"
        iconName="ios-menu"
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  ),
})
