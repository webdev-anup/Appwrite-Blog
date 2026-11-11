import { useEffect, useState } from 'react'
import { Container, PostForm } from '../components';
import appwriteService from "../appwrite/config"
import { useNavigate, useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPost] = useState(null);
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            // Fetch the post data based on the slug
            appwriteService.getPost(slug).then((post) => {
                setPost(post);
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate]);

  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post}></PostForm>
        </Container>

    </div>
  ) : null
}

export default EditPost