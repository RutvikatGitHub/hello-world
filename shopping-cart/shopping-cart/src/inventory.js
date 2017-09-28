var CartItem = React.createClass({

    calculateTotal: function() {
        return Number(this.props.price * this.props.qty).toFixed(2);
    },

    render: function() {
      if(this.props.operation === 'add') {
          return (
          <table>
            <tr>
                <div key={this.props.key} className='Row'>
                <div className='Column'>{this.props.name}</div>
                <div className='Column'>{Number(this.props.price).toFixed(2)}</div>
                <div className='Column'>
                  <button onClick={this.props.onQtyChanged.bind(null, this.props.arrayIndex, '+')}>Add</button>
                </div>
                </div>
            </tr>
          </table>
          );
      }
      else {
          if (this.props.operation === 'sub')
          {
            if (this.props.qty !== 0) {
                return (
                    <table>
                    <tr>
                    <td>
                    <div key={this.props.key} className='Row'>
                        <div className='Column'>{this.props.name}</div>
                        <div className='Column'>{this.props.qty}</div>
                        <div className='Column'>${Number(this.props.price).toFixed(2)}</div>
                        <div className='Column'>
                            <button className='Column' onClick={this.props.onQtyChanged.bind(null, this.props.arrayIndex, '-')}>Remove</button>
                        </div>
                        <div className='Column'>${this.calculateTotal()}</div>
                    </div>
                    </td>
                    </tr>
                    </table>
                );
            }
            else {
              return (
                <div></div>
              );
            }
          }

        }
      }
});

var Inventory = React.createClass({

    buildRows: function() {
        var rows = [];
        var QuantityFlag = this.props.onQtyChanged;
        var x = 0;
        this.props.cartItems.forEach(function(cartItem) {
            rows.push(<CartItem key={cartItem.id} operation={'add'} arrayIndex={x++} name={cartItem.name} qty={cartItem.qty} price={cartItem.price} onQtyChanged={QuantityFlag} />);

        });
        return rows;
    },

    render: function() {
        return (
            <section className='inventory'>
              <h1>Menu</h1>
              <div>
                  {this.buildRows()}
              </div>
            </section>
        );
    }

});


var FinalCart = React.createClass({
    getInitialState: function () {
        return {cartItems};
    },

    QtyMoreThanOne : function () {
        var finalCartItems = [];
        var QuantityFlag = this.props.onQtyChanged;
        var x = 0;
        this.props.cartItems.forEach(function(cartItem) {
            finalCartItems.push(<CartItem key={cartItem.id} operation = {'sub'} arrayIndex={x++} name={cartItem.name} qty={cartItem.qty} price={cartItem.price} onQtyChanged={QuantityFlag} />);
        });
        return finalCartItems;
    },

    render: function () {
        return (
            <section className='cart'>

              <h1>Order</h1>
              <div>
                  {this.QtyMoreThanOne()}
              </div>
            </section>
        );
    }
});




var PrintCost = React.createClass({
    calculateTotal: function(total) {
        return Number(total).toFixed(2);
    },

    render: function() {
        return (
              <div>${this.calculateTotal(this.props.total)}</div>
        );
    }
});





var TotalCost = React.createClass({

    Total: function() {
        var items = this.props.cartItems;
        var Total = 0;
        for (var x = 0; x < items.length; x ++) {
            Total += items[x].price * items[x].qty;
        }
        return Total;
    },

    render: function() {
        return (
            <section className='Total'>
                <div className='Row'><b>Total:</b>
              <div className={'Column'}>
                <PrintCost label='Total' total={this.Total()}/>
              </div>
              </div>
            </section>
        );
    }

});



var Cartmain = React.createClass({

    getInitialState: function() {
        return {cartItems};
    },

    handleQtyChanged: function(cartItemIndex, direction) {
        if (direction === '+') {
            cartItems[(cartItemIndex)].qty++;
        } else {
            cartItems[(cartItemIndex)].qty--;
        }

        this.setState({cartItems});
    },

    render: function() {
        return (
            <main>
              <Inventory cartItems={this.state.cartItems} onQtyChanged={this.handleQtyChanged}/>
              <FinalCart cartItems={this.state.cartItems} onQtyChanged={this.handleQtyChanged}/>
              <TotalCost cartItems={this.state.cartItems} />
            </main>
        );
    }

});


React.render(
    <Cartmain cartItems={cartItems} />,
    document.getElementById('get-cart-items')
);
