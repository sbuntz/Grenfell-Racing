
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SideHeader from "../components/sideHeader";
import HeaderTwo from "../components/Header/index";
import { ADD_POST } from '../utils/mutations';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';

export default function LoginForm() {

  const [formState, setFormState] = useState({
    title: '',
    author: '',
    description: '',
    text: '',
  });
  const [addPost, { error, data }] = useMutation(ADD_POST);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addPost({
        variables: { ...formState },
      });

      Auth.login(data.addPost.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={'main-wrapper has-side-header'}>
    <HeaderTwo/>
    <SideHeader mobile={false}/>
    <div className="content-body section custom-scroll">
            <div className="section-wrap section"></div>
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
            <form onSubmit={handleFormSubmit}>
   
              <input
                  className="form-input"
                  placeholder="Title"
                  name="title"
                  type="text"
                  value={formState.title}
                  onChange={handleChange}
                />

<input
                  className="form-input"
                  placeholder="Description"
                  name="description"
                  type="text"
                  value={formState.description}
                  onChange={handleChange}
                />
          <input
                  className="form-input"
                  placeholder="Author"
                  name="author"
                  type="text"
                  value={formState.author}
                  onChange={handleChange}
                />
           <input
                  className="form-input"
                  placeholder="Text"
                  name="text"
                  type="text"
                  value={formState.text}
                  onChange={handleChange}
                />
                <div>
                
                <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Add Cover
                </button>
                <br></br>
                </div>
            <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
       
      </form>  )}
           {error && (
            <div className="my-3 p-3 bg-danger text-white">
              {error.message}
            </div>
          )}
      </div>  </div>  
  );
}
