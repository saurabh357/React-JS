import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'; 
import ApprovalCard from './ApprovalCard';

const App = () => {
    return ( 
    <div className = "ui comments">
        <ApprovalCard>
            <div>
                <h4>Warning!</h4>
            Are you sure you want to do this?
            </div>
            </ApprovalCard>
            <ApprovalCard>
      <CommentDetail  
      author="saurabh" 
      time="Today is 2:00PM" 
      text="Great job!" 
      avatar={faker.image.avatar()}
      />
      
        </ApprovalCard>

    

      <ApprovalCard>
      <CommentDetail 
      author="Raja"     
      time="Today is 9:00AM" 
      text="Nice" 
      avatar={faker.image.avatar()}
      />
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail 
      author = "Vansh"  
      time="Today is 8:40PM" 
      text="Excellent" 
      avatar={faker.image.avatar()}
      />
      </ApprovalCard>
        </div>
    
    );
}
ReactDOM.render(<App />, document.querySelector('#root'));
