import * as React from 'react';
import { Text, View, Image, StatusBar, TouchableOpacity } from 'react-native';

export default class Game extends React.Component {
    constructor() {
        super()
        this.state = {
            squire1: '',
            squire2: '',
            squire3: '',
            squire4: '',
            squire5: '',
            squire6: '',
            squire7: '',
            squire8: '',
            squire9: '',
            squire1_color: '',
            squire2_color: '',
            squire3_color: '',
            squire4_color: '',
            squire5_color: '',
            squire6_color: '',
            squire7_color: '',
            squire8_color: '',
            squire9_color: '',
            player: true,
            new_game: false,
            winner: '',
            start: false
        }
    }

    finish_game() {
        if (this.state.squire1 == this.state.squire2 && this.state.squire1 == this.state.squire3 && this.state.squire1 != '') {
            if (this.state.squire1 == 'O') {
                this.setState({
                    squire1_color: '#A5C9CA',
                    squire2_color: '#A5C9CA',
                    squire3_color: '#A5C9CA',
                    winner: 'Player 1',
                    new_game: true
                })
            }
            else if (this.state.squire1 == 'X') {
                this.setState({
                    squire1_color: '#A5C9CA',
                    squire2_color: '#A5C9CA',
                    squire3_color: '#A5C9CA',
                    winner: 'Player 2',
                    new_game: true
                })
            }
        }
        else if (this.state.squire1 == this.state.squire4 && this.state.squire1 == this.state.squire7 && this.state.squire1 != '') {
            if (this.state.squire1 == 'O') {
                this.setState({
                    squire1_color: '#A5C9CA',
                    squire4_color: '#A5C9CA',
                    squire7_color: '#A5C9CA',
                    winner: 'Player 1',
                    new_game: true
                })
            }
            else if (this.state.squire1 == 'X') {
                this.setState({
                    squire1_color: '#A5C9CA',
                    squire4_color: '#A5C9CA',
                    squire7_color: '#A5C9CA',
                    winner: 'Player 2',
                    new_game: true
                })
            }
        }
        else if (this.state.squire1 == this.state.squire5 && this.state.squire1 == this.state.squire9 && this.state.squire1 != '') {
            if (this.state.squire1 == 'O') {
                this.setState({
                    squire1_color: '#A5C9CA',
                    squire5_color: '#A5C9CA',
                    squire9_color: '#A5C9CA',
                    winner: 'Player 1',
                    new_game: true
                })
            }
            else if (this.state.squire1 == 'X') {
                this.setState({
                    squire1_color: '#A5C9CA',
                    squire5_color: '#A5C9CA',
                    squire9_color: '#A5C9CA',
                    winner: 'Player 2',
                    new_game: true
                })
            }
        }
        else if (this.state.squire2 == this.state.squire5 && this.state.squire2 == this.state.squire8 && this.state.squire2 != '') {
            if (this.state.squire2 == 'O') {
                this.setState({
                    squire2_color: '#A5C9CA',
                    squire5_color: '#A5C9CA',
                    squire8_color: '#A5C9CA',
                    winner: 'Player 1',
                    new_game: true
                })
            }
            else if (this.state.squire2 == 'X') {
                this.setState({
                    squire2_color: '#A5C9CA',
                    squire5_color: '#A5C9CA',
                    squire8_color: '#A5C9CA',
                    winner: 'Player 2',
                    new_game: true
                })
            }
        }
        else if (this.state.squire3 == this.state.squire6 && this.state.squire3 == this.state.squire9 && this.state.squire3 != '') {
            if (this.state.squire3 == 'O') {
                this.setState({
                    squire3_color: '#A5C9CA',
                    squire6_color: '#A5C9CA',
                    squire9_color: '#A5C9CA',
                    winner: 'Player 1',
                    new_game: true
                })
            }
            else if (this.state.squire3 == 'X') {
                this.setState({
                    squire3_color: '#A5C9CA',
                    squire6_color: '#A5C9CA',
                    squire9_color: '#A5C9CA',
                    winner: 'Player 2',
                    new_game: true
                })
            }
        }
        else if (this.state.squire3 == this.state.squire5 && this.state.squire3 == this.state.squire7 && this.state.squire3 != '') {
            if (this.state.squire3 == 'O') {
                this.setState({
                    squire3_color: '#A5C9CA',
                    squire5_color: '#A5C9CA',
                    squire7_color: '#A5C9CA',
                    winner: 'Player 1',
                    new_game: true
                })
            }
            else if (this.state.squire3 == 'X') {
                this.setState({
                    squire3_color: '#A5C9CA',
                    squire5_color: '#A5C9CA',
                    squire7_color: '#A5C9CA',
                    winner: 'Player 2',
                    new_game: true
                })
            }
        }
        else if (this.state.squire4 == this.state.squire5 && this.state.squire4 == this.state.squire6 && this.state.squire4 != '') {
            if (this.state.squire4 == 'O') {
                this.setState({
                    squire4_color: '#A5C9CA',
                    squire5_color: '#A5C9CA',
                    squire6_color: '#A5C9CA',
                    winner: 'Player 1',
                    new_game: true
                })
            }
            else if (this.state.squire4 == 'X') {
                this.setState({
                    squire4_color: '#A5C9CA',
                    squire5_color: '#A5C9CA',
                    squire6_color: '#A5C9CA',
                    winner: 'Player 2',
                    new_game: true
                })
            }
        }
        else if (this.state.squire7 == this.state.squire8 && this.state.squire7 == this.state.squire9 && this.state.squire7 != '') {
            if (this.state.squire7 == 'O') {
                this.setState({
                    squire7_color: '#A5C9CA',
                    squire8_color: '#A5C9CA',
                    squire9_color: '#A5C9CA',
                    winner: 'Player 1',
                    new_game: true
                })
            }
            else if (this.state.squire7 == 'X') {
                this.setState({
                    squire7_color: '#A5C9CA',
                    squire8_color: '#A5C9CA',
                    squire9_color: '#A5C9CA',
                    winner: 'Player 2',
                    new_game: true
                })
            }
        }
        else if (
            this.state.squire1 != '' &&
            this.state.squire2 != '' &&
            this.state.squire3 != '' &&
            this.state.squire4 != '' &&
            this.state.squire5 != '' &&
            this.state.squire6 != '' &&
            this.state.squire7 != '' &&
            this.state.squire8 != '' &&
            this.state.squire9 != ''
        ) {
            this.setState({
                new_game: true,
                winner: 'No winner'
            })
        }
    }

    newGame() {
        this.setState({
            squire1: '',
            squire2: '',
            squire3: '',
            squire4: '',
            squire5: '',
            squire6: '',
            squire7: '',
            squire8: '',
            squire9: '',
            squire1_color: '#162142',
            squire2_color: '#162142',
            squire3_color: '#162142',
            squire4_color: '#162142',
            squire5_color: '#162142',
            squire6_color: '#162142',
            squire7_color: '#162142',
            squire8_color: '#162142',
            squire9_color: '#162142',
            player: true,
            new_game: false,
        })
    }

    render() {
        return (
            <>
                <StatusBar barStyle="light-content" backgroundColor={this.state.start == false ? '#162142' : '#395B64'} />

                {this.state.start == false ?
                    (
                        <View style={{ backgroundColor: "#162142", flex: 1, alignItems: 'center' }}>

                            <Image
                                source={require('./img/ground.jpg')}
                                style={{ width: '90%', height: '50%', marginTop: '20%', borderRadius: 10 }}
                            />

                            <TouchableOpacity
                                style=
                                {{
                                    height: '7%',
                                    width: '80%',
                                    backgroundColor: '#000',
                                    marginTop: '50%',
                                    borderRadius: 10,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                                onPress={() => {
                                    this.setState({ start: true })
                                }}
                            >
                                <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>Start game</Text>

                            </TouchableOpacity>

                        </View>
                    ) :
                    (
                        <View style={{ backgroundColor: "#162142", flex: 1, alignItems: 'center' }}>

                            <View
                                style=
                                {{
                                    width: '100%',
                                    height: '15%',
                                    flexDirection: 'row',
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#fff',
                                    backgroundColor: '#395B64'
                                }}
                            >
                                <View
                                    style=
                                    {{
                                        flex: 1,
                                        alignItems: 'center',
                                        borderRightWidth: 1,
                                        borderRightColor: '#fff'
                                    }}
                                >
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff', marginTop: 20 }}>
                                        Player 1
                                    </Text>
                                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#f00', marginTop: 10 }}>
                                        O
                                    </Text>
                                </View>

                                <View
                                    style=
                                    {{
                                        flex: 1,
                                        alignItems: 'center',
                                    }}
                                >
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff', marginTop: 20 }}>
                                        Player 2
                                    </Text>
                                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#0f0', marginTop: 10 }}>
                                        X
                                    </Text>
                                </View>

                            </View>

                            <View
                                style=
                                {{
                                    width: '100%',
                                    height: '50%',
                                    alignItems: 'center',
                                    marginTop: 20
                                }}
                            >
                                <View
                                    style=
                                    {{
                                        width: "80%",
                                        height: '25%',
                                        marginTop: 40,
                                        flexDirection: 'row',
                                        borderWidth: 5,
                                        borderColor: '#fff',
                                    }}
                                >
                                    <TouchableOpacity
                                        style=
                                        {{
                                            flex: 1,
                                            borderRightWidth: 5,
                                            borderRightColor: '#fff',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: this.state.squire1_color,
                                        }}

                                        onPress={() => {
                                            if (this.state.player == true) {
                                                this.setState({
                                                    squire1: 'O',
                                                    player: false
                                                }, () => {
                                                    this.finish_game();
                                                });

                                            }
                                            else {
                                                this.setState({
                                                    squire1: 'X',
                                                    player: true
                                                }, () => {
                                                    this.finish_game();
                                                })
                                            }
                                        }
                                        }

                                    >
                                        <Text style={{
                                            color: this.state.squire1 == 'O' ? '#f00' : '#0f0',
                                            fontSize: 50,
                                            fontWeight: 'bold'
                                        }}>
                                            {this.state.squire1}
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style=
                                        {{
                                            flex: 1,
                                            borderRightWidth: 5,
                                            borderRightColor: '#fff',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: this.state.squire2_color,
                                        }}

                                        onPress={() => {
                                            if (this.state.player == true) {
                                                this.setState({
                                                    squire2: 'O',
                                                    player: false
                                                }, () => {
                                                    this.finish_game();
                                                })
                                            }
                                            else {
                                                this.setState({
                                                    squire2: 'X',
                                                    player: true
                                                }, () => {
                                                    this.finish_game();
                                                })
                                            }
                                        }}
                                    >
                                        <Text style={{
                                            color: this.state.squire2 == 'O' ? '#f00' : '#0f0',
                                            fontSize: 50,
                                            fontWeight: 'bold'
                                        }}>
                                            {this.state.squire2}
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style=
                                        {{
                                            flex: 1,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: this.state.squire3_color,
                                        }}

                                        onPress={() => {
                                            if (this.state.player == true) {
                                                this.setState({
                                                    squire3: 'O',
                                                    player: false
                                                }, () => {
                                                    this.finish_game();
                                                })
                                            }
                                            else {
                                                this.setState({
                                                    squire3: 'X',
                                                    player: true
                                                }, () => {
                                                    this.finish_game();
                                                })
                                            }
                                        }}
                                    >
                                        <Text style={{
                                            color: this.state.squire3 == 'O' ? '#f00' : '#0f0',
                                            fontSize: 50,
                                            fontWeight: 'bold'
                                        }}>
                                            {this.state.squire3}
                                        </Text>

                                    </TouchableOpacity>

                                </View>

                                <View
                                    style=
                                    {{
                                        width: "80%",
                                        height: '25%',
                                        flexDirection: 'row',
                                        borderRightWidth: 5,
                                        borderLeftWidth: 5,
                                        borderBottomWidth: 5,
                                        borderColor: '#fff',
                                    }}
                                >
                                    <TouchableOpacity
                                        style=
                                        {{
                                            flex: 1,
                                            borderRightWidth: 5,
                                            borderRightColor: '#fff',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: this.state.squire4_color,
                                        }}

                                        onPress={() => {
                                            if (this.state.player == true) {
                                                this.setState({
                                                    squire4: 'O',
                                                    player: false
                                                }, () => {
                                                    this.finish_game();
                                                })
                                            }
                                            else {
                                                this.setState({
                                                    squire4: 'X',
                                                    player: true
                                                }, () => {
                                                    this.finish_game();
                                                })
                                            }
                                        }}
                                    >
                                        <Text style={{
                                            color: this.state.squire4 == 'O' ? '#f00' : '#0f0',
                                            fontSize: 50,
                                            fontWeight: 'bold'
                                        }}>
                                            {this.state.squire4}
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style=
                                        {{
                                            flex: 1,
                                            borderRightWidth: 5,
                                            borderRightColor: '#fff',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: this.state.squire5_color,
                                        }}

                                        onPress={() => {
                                            if (this.state.player == true) {
                                                this.setState({
                                                    squire5: 'O',
                                                    player: false
                                                }, () => {
                                                    this.finish_game();
                                                })
                                            }
                                            else {
                                                this.setState({
                                                    squire5: 'X',
                                                    player: true
                                                }, () => {
                                                    this.finish_game();
                                                })
                                            }
                                        }}
                                    >
                                        <Text style={{
                                            color: this.state.squire5 == 'O' ? '#f00' : '#0f0',
                                            fontSize: 50,
                                            fontWeight: 'bold'
                                        }}>
                                            {this.state.squire5}
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style=
                                        {{
                                            flex: 1,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: this.state.squire6_color,
                                        }}

                                        onPress={() => {
                                            if (this.state.player == true) {
                                                this.setState({
                                                    squire6: 'O',
                                                    player: false
                                                }, () => {
                                                    this.finish_game();
                                                })
                                            }
                                            else {
                                                this.setState({
                                                    squire6: 'X',
                                                    player: true
                                                }, () => {
                                                    this.finish_game();
                                                })
                                            }
                                        }}
                                    >
                                        <Text style={{
                                            color: this.state.squire6 == 'O' ? '#f00' : '#0f0',
                                            fontSize: 50,
                                            fontWeight: 'bold'
                                        }}>
                                            {this.state.squire6}
                                        </Text>
                                    </TouchableOpacity>

                                </View>

                                <View
                                    style=
                                    {{
                                        width: "80%",
                                        height: '25%',
                                        flexDirection: 'row',
                                        borderRightWidth: 5,
                                        borderLeftWidth: 5,
                                        borderBottomWidth: 5,
                                        borderColor: '#fff',
                                    }}
                                >
                                    <TouchableOpacity
                                        style=
                                        {{
                                            flex: 1,
                                            borderRightWidth: 5,
                                            borderRightColor: '#fff',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: this.state.squire7_color,
                                        }}

                                        onPress={() => {
                                            if (this.state.player == true) {
                                                this.setState({
                                                    squire7: 'O',
                                                    player: false
                                                }, () => {
                                                    this.finish_game();
                                                })
                                            }
                                            else {
                                                this.setState({
                                                    squire7: 'X',
                                                    player: true
                                                }, () => {
                                                    this.finish_game();
                                                })
                                            }
                                        }}
                                    >
                                        <Text style={{
                                            color: this.state.squire7 == 'O' ? '#f00' : '#0f0',
                                            fontSize: 50,
                                            fontWeight: 'bold'
                                        }}>
                                            {this.state.squire7}
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style=
                                        {{
                                            flex: 1,
                                            borderRightWidth: 5,
                                            borderRightColor: '#fff',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: this.state.squire8_color,
                                        }}

                                        onPress={() => {
                                            if (this.state.player == true) {
                                                this.setState({
                                                    squire8: 'O',
                                                    player: false
                                                }, () => {
                                                    this.finish_game();
                                                })
                                            }
                                            else {
                                                this.setState({
                                                    squire8: 'X',
                                                    player: true
                                                }, () => {
                                                    this.finish_game();
                                                })
                                            }
                                        }}
                                    >
                                        <Text style={{
                                            color: this.state.squire8 == 'O' ? '#f00' : '#0f0',
                                            fontSize: 50,
                                            fontWeight: 'bold'
                                        }}>
                                            {this.state.squire8}
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style=
                                        {{
                                            flex: 1,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: this.state.squire9_color,
                                        }}

                                        onPress={() => {
                                            if (this.state.player == true) {
                                                this.setState({
                                                    squire9: 'O',
                                                    player: false
                                                }, () => {
                                                    this.finish_game();
                                                })
                                            }
                                            else {
                                                this.setState({
                                                    squire9: 'X',
                                                    player: true
                                                }, () => {
                                                    this.finish_game();
                                                })
                                            }
                                        }}
                                    >
                                        <Text style={{
                                            color: this.state.squire9 == 'O' ? '#f00' : '#0f0',
                                            fontSize: 50,
                                            fontWeight: 'bold'
                                        }}>
                                            {this.state.squire9}
                                        </Text>
                                    </TouchableOpacity>

                                </View>

                            </View>

                            {this.state.new_game == true ?
                                (
                                    <View
                                        style=
                                        {{
                                            width: '100%',
                                            height: '100%',
                                            marginTop: 50,
                                            backgroundColor: '#395B64',
                                            alignItems: 'center'
                                        }}
                                    >

                                        <View
                                            style=
                                            {{
                                                width: '100%',
                                                height: 80,
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}
                                        >

                                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>
                                                The Winner is
                                            </Text>

                                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#0f0' }}>
                                                {this.state.winner}
                                            </Text>
                                        </View>

                                        <TouchableOpacity
                                            style=
                                            {{
                                                height: 50,
                                                width: '80%',
                                                backgroundColor: '#000',
                                                marginTop: 30,
                                                borderRadius: 20,
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                alignSelf: 'center'
                                            }}
                                            onPress={() => {
                                                this.newGame()
                                            }}
                                        >
                                            <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>New game</Text>

                                        </TouchableOpacity>

                                    </View>
                                ) :
                                (<Text></Text>)
                            }


                        </View>
                    )
                }

            </>
        )
    }
}
