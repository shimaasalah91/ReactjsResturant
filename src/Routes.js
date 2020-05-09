export const Routes = (
  <Switch>
        <Route 
            path="/" 
            component={Home} 
        />
        <Route 
            path="/about" 
            component={About} 
        />
        <Route
          path="/contact"
          render={() => <h1>Contact Us</h1>} 
        />
        <Route 
            path="/blog" 
            children={({match}) => (
              <li className={match ? 'active' : ''}>
                <Link to="/blog">Blog</Link>
               </li>)} 
        />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
);